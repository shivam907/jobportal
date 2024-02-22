'use client';
import classes from "./page.module.css";
import Button1 from "@/components/Buttons/Button1";
import JobBox from "@/components/Job/JobBox";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";
const layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <div className={classes.hero}>
          <div className={classes.bar}>
            <div className={classes.input}>
              <img src="./search.svg" alt="" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for Companies, Keyword "
              />
            </div>
            <div className={classes.input}>
              <img src="./location.png" alt="" />
              <input type="text" name="" id="" placeholder="Location" />
            </div>
            <div className={classes.input}>
              <img src="./work.svg" alt="" />
              <input type="text" name="" id="" placeholder="Experience" />
            </div>
            <Button1>Search</Button1>
          </div>
          {/* <div className={classes.text}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Freshers Only</label>
        </div> */}
        </div>
        <section className={classes.manual}>
          {/* <h1 className={classes.latest}>Latest Jobs</h1> */}
          <div className={classes.jobbody}>
            <aside className={classes.aside}>
                <div className={classes.asbox}>
                    <div className={classes.ashead}>
                        <h1>A</h1>
                    </div>
                    <div className={classes.asbody}>
                        <div className={`${classes.assbox} ${classes.asactive}`}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                    </div>
                </div>
                <div className={classes.asbox}>
                    <div className={classes.ashead}>
                        <h1>A</h1>
                    </div>
                    <div className={classes.asbody}>
                        <div className={`${classes.assbox} ${classes.asactive}`}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                    </div>
                </div>
                <div className={classes.asbox}>
                    <div className={classes.ashead}>
                        <h1>A</h1>
                    </div>
                    <div className={classes.asbody}>
                        <div className={`${classes.assbox} ${classes.asactive}`}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                        <div className={classes.assbox}>
                            <p>Amazon</p>
                            <KeyboardArrowRightIcon/>
                        </div>
                    </div>
                </div>
            </aside>
            <div className={classes.body}>{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default layout;