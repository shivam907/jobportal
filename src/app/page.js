import classes from "./page.module.css";
import Button1 from "@/components/Buttons/Button1";
export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.hero}>
        <div className={classes.bar}>
          <div className={classes.input}>
          <img src="./search.svg" alt="" />
            <input type="text" name="" id="" placeholder="Search" />
          </div>
          <div className={classes.input}>
          <img src="./search.svg" alt="" />
            <input type="text" name="" id="" placeholder="Search" />
          </div>
          <div className={classes.input}>
          <img src="./search.svg" alt="" />
            <input type="text" name="" id="" placeholder="Search" />
          </div>
          <Button1>Search</Button1>
        </div>
      </div>
    </main>
  );
}
