"use server";
import data from "@/data/company.json";
const fs= require("fs")
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
export const scraper = async (url) => {
  console.log("url", url);
  try {
    const chrome = await puppeteer.launch();
    const page = await chrome.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
    );

    const response = await page.goto(url);
    console.log(response);
    if (!response || !response.ok()) {
      throw new Error(
        `Failed to fetch ${url}. Status: ${
          response ? response.status() : "unknown"
        }`
      );
    }

    await page.waitForSelector(".Jobs", { timeout: 2000 });

    const body = await page.evaluate(() => {
      return document.querySelector("body")?.innerHTML || "";
    });
    // console.log(body)
    const $ = cheerio.load(body);
    const data = [];
    $("article").each((_idx, el) => {
      console.log(_idx);
      data.push({
        title: $(el).find(".title").text(),
        applyLink: $(el).find(".title").attr("href") || "",
        location: $(el).find(".location span").text(),
        salary: $(el).find(".salary span").text(),
        experience: $(el).find(".experience span").text(),
        postingDate: $(el).find(".jobTupleFooter div span").text(),
        description: $(el).find(".job-description div").text(),
      });
    });

    await chrome.close();

    return { success: true, data };
  } catch (error) {
    console.error("Error in API:", error.message);
    return { success: false, error: error.message };
  }
};
export const scrap = async () => {
  const allJobs = {};
  let keys = Object.keys(data.data);
  const maxConcurrency = 5; 
  for (let j = 0; j < keys.length; j++) {
    const job = keys[j];
    if (data.data[job].includes("naukri")) {
      console.log(data.data[job]);
      const dat = await scraper(data.data[job]);
      let arr = [];
      dat.data.forEach((i) => {
        arr.push({
          key: Math.random(),
          scraped: true,
          jobName: i.title,
          date: i.postingDate,
          salary: i.salary,
          companyName: job,
          experience: i.experience,
          location: i.location,
          description: i.description.slice(0, 100),
          link: i.applyLink,
        });
      });
      allJobs[job] = arr;
    }
    if ((j + 1) % maxConcurrency === 0) {
      await new Promise((resolve) => setTimeout(resolve, 5000)); 
    }
  }

  // console.log(allJobs);
  console.log(process.cwd())
  await fs.writeFileSync("./src/data/scrap.json",JSON.stringify(allJobs), (err) => {
        if (err) throw err;
        console.log('The file has been saved!', 'cases');
    });
  return allJobs;
};
