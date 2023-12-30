import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Projects from "./projects";
import image from "@/assets/documents-dark.webp";
import { Button } from "./ui/button";

function Home() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-50 dark:text-slate-50 dark:bg-inherit mt-0">
      <div className="mt-10 mx-40 text-8xl text-slate-800 dark:text-slate-50 text-center">
        <div className="w-5/6 mx-auto mt-20">
          Ever had problems while searching projects?
        </div>
        <div className="text-xl my-8 w-4/6 m-auto ">
          Prohub is here to help you out! Checkout the latest projects near your
          area and collaborate now! Worried about your skills? Nahh! We can help
          you with sorting projects based on your skills.
        </div>
        <img src={image} className="m-auto" alt="projects" width="30%" />
      </div>
      <div className="mt-10 mx-40 text-2xl text-slate-400">Your projects</div>
      <div className="h-1 w-5/6 bg-slate-50 m-auto opacity-10 mt-2"></div>
      <div className="mt-10 px-20 flex flex-wrap justify-center">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
      <div className="mt-10 mx-40 text-2xl text-slate-400">Latest projects</div>
      <div className="h-1 w-5/6 bg-slate-50 m-auto opacity-10 mt-2"></div>
      <div className="mt-10 px-20 flex flex-wrap justify-center">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
}

export default Home;
