'use server'
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
export async function POST(req) {
    const  ur  = await req.json();
    const url=ur.url
  console.log("url",url)
  try {
    const chrome = await puppeteer.launch({headless: true,
args: [
'--no-sandbox',
'--disable-setuid-sandbox',
],});
    const page = await chrome.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
    );

    const response = await page.goto(url);
        console.log(response)
    if (!response || !response.ok()) {
      throw new Error(`Failed to fetch ${url}. Status: ${response ? response.status() : 'unknown'}`);
    }

    await page.waitForSelector(".Jobs", { timeout: 2000 });

    const body = await page.evaluate(() => {
      return document.querySelector("body")?.innerHTML || "";
    });
    // console.log(body)
    const $ = cheerio.load(body);
    const data = [];
    $("article").each((_idx, el) => {
        console.log(_idx)
      data.push({
        title: $(el).find(".title").text(),
        applyLink: $(el).find(".title").attr('href') || '',
        location: $(el).find(".location span").text(),
        salary: $(el).find(".salary span").text(),
        experience: $(el).find(".experience span").text(),
        postingDate: $(el).find(".jobTupleFooter div span").text(),
        description: $(el).find(".job-description div").text(),
      });
    });

    await chrome.close();

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Error in API:", error.message);
   return Response.json({ success: false, error: error.message });
  }
}