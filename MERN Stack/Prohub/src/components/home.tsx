import Projects from "./projects";
import image from "@/assets/documents-dark.webp";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@radix-ui/react-dropdown-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import { useContext, useEffect, useRef, useState } from "react";
import { globalToken } from "@/App";
import { useToast } from "./ui/use-toast";

function Home() {
  const { toast } = useToast();
  const token = useContext(globalToken);
  const inputRef = useRef(null);
  const tagRef = useRef(null);

  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState(["Please wait till we fetch your repos!"]);

  const [latestRepo, setLatestRepo] = useState([]);

  const [projects, setprojects] = useState("");
  useEffect(() => {
    const fetchRepos = async () => {
      fetch("http://localhost:5000/api/user/profile?token=" + token, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          const pro = res.userDetails?.repos?.map((repo) => {
            return (
              <Projects
                name={repo.repoName}
                location={repo.repoLocation}
                description={repo.repoDescription}
                tags={repo.repoTags}
                link={repo.repoLink}
                owner={repo.repoOwner}
              />
            );
          });
          setprojects(pro);

          fetch("http://localhost:5000/api/user/search?latest=true").then(
            (res) => {
              res.json().then((res) => {
                setLatestRepo(res.data);
              });
            }
          );
        });
    };
    fetchRepos();
  }, [token, userData]);

  console.log(latestRepo);

  const repository = latestRepo?.map((repo) => {
    return (
      <Projects
        name={repo.repoName}
        location={repo.repoLocation}
        description={repo.repoDescription}
        tags={repo.repoTags}
        link={repo.repoLink}
        owner={repo.repoOwner}
      />
    );
  });

  const getRepos = async () => {
    fetch("http://localhost:5000/api/user/profile?token=" + token, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res);
        fetch(`https://api.github.com/users/${res.data.login}/repos`).then(
          (res) => {
            res.json().then((res) => {
              setRepos(res);
            });
          }
        );
      });
    fetch("http://localhost:5000/api/user/search?latest=true");
  };

  const submitRepo = async () => {
    if (token === "" || token === undefined) {
      toast({
        title: "Login Error",
        description: "Please login to add projects!",
      });
      return;
    }
    const value = inputRef.current.innerHTML;
    const formData = {
      _id: "",
      repoName: "",
      repoDescription: "",
      repoLink: "",
      repoTags: "",
      repoOwner: "",
      repoLocation: "",
    };
    const tags = tagRef.current.value.toUpperCase().split(",");
    repos.map((repo) => {
      if (repo.name === value) {
        formData._id = userData.userDetails._id;
        formData.repoName = repo.name;
        formData.repoDescription = repo.description;
        formData.repoLink = repo.html_url;
        formData.repoTags = tags;
        formData.repoOwner = repo.owner.login;
        formData.repoLocation =
          userData.userDetails.city + ", " + userData.userDetails.country;

        fetch("http://localhost:5000/api/user/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          res.json().then((res) => {
            console.log(res.repoAdded);

            setLatestRepo((prev) => [...prev, res.repoAdded]);

            const pro = res.data[0]?.repos?.map((repo) => {
              return (
                <Projects
                  name={repo.repoName}
                  location={repo.repoLocation}
                  description={repo.repoDescription}
                  tags={repo.repoTags}
                  link={repo.repoLink}
                  owner={repo.repoOwner}
                />
              );
            });
            setprojects(pro);
            document.getElementById("close").click();
          });
        });
      }
    });
  };

  return (
    <>
      <Drawer>
        <div className="w-full h-full bg-slate-50 text-slate-50 dark:text-slate-50 dark:bg-inherit mt-0 ">
          <div className="mt-10 mx-40 text-8xl text-slate-800 dark:text-slate-50 text-center">
            <div className="w-5/6 mx-auto mt-20">
              Ever had problems while searching projects?
            </div>
            <div className="text-xl mt-8 mb-4 w-4/6 m-auto ">
              Prohub is here to help you out! Checkout the latest projects near
              your area and collaborate now! Worried about your skills? Nahh! We
              can help you with sorting projects based on your skills.
            </div>
            <img src={image} className="m-auto" alt="projects" width="30%" />
            <Button
              className="m-auto"
              onClick={() => {
                // window.scrollTo(0, 1000);Change this
              }}
            >
              Explore Projects
            </Button>
          </div>
          <div className="mt-10 mx-40 text-2xl text-slate-400">
            Your projects
          </div>
          <div className="h-1 w-5/6 bg-slate-50 m-auto opacity-10 mt-2"></div>
          <div className="mt-10 px-20 flex flex-wrap justify-center">
            {projects}
            <div>
              <DrawerTrigger onClick={getRepos}>
                <Card className="w-96 m-10 h-96 hover:scale-105 duration-100 ease-in">
                  <CardHeader>
                    <CardTitle className="text-left">Add Project</CardTitle>
                    <CardDescription className="flex py-1"></CardDescription>
                  </CardHeader>
                  <CardContent className="py-5">
                    <div className="m-auto w-fit opacity-40 pb-10">
                      <svg
                        fill="#ffffff"
                        height="80px"
                        width="80px"
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 294.774 294.774"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M251.63,43.179c-11.295-11.295-23.931-20.472-37.556-27.276c-2.966-1.482-6.568-0.277-8.048,2.687 c-1.48,2.965-0.277,6.568,2.687,8.048c12.467,6.226,24.052,14.646,34.432,25.026c52.801,52.801,52.801,138.714,0,191.515 s-138.714,52.801-191.515,0s-52.801-138.714,0-191.515C77.207,26.086,111.215,12,147.386,12c3.313,0,6-2.687,6-6s-2.687-6-6-6 C108.009,0,70.989,15.334,43.144,43.179c-57.479,57.479-57.479,151.006,0,208.485c28.74,28.74,66.491,43.11,104.243,43.11 s75.503-14.37,104.243-43.11C309.109,194.185,309.109,100.658,251.63,43.179z"></path>{" "}
                            <path d="M147.387,51.992c-3.313,0-6,2.687-6,6v178.859c0,3.314,2.687,6,6,6s6-2.686,6-6V57.992 C153.387,54.678,150.7,51.992,147.387,51.992z"></path>{" "}
                            <path d="M171.387,153.421h65.43c3.313,0,6-2.687,6-6s-2.687-6-6-6h-65.43c-3.313,0-6,2.687-6,6S168.073,153.421,171.387,153.421z"></path>{" "}
                            <path d="M57.957,141.421c-3.313,0-6,2.687-6,6s2.687,6,6,6h63.43c3.313,0,6-2.687,6-6s-2.687-6-6-6H57.957z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap">
                    Add projects from github and collaborate with other
                    developers. Easily manage your projects and get help from
                    other developers.
                  </CardFooter>
                </Card>
              </DrawerTrigger>
            </div>
          </div>
          <div className="mt-10 mx-40 text-2xl text-slate-400" id="latest">
            Latest projects
          </div>
          <div className="h-1 w-5/6 bg-slate-50 m-auto opacity-10 mt-2"></div>
          <div className="mt-10 px-20 flex flex-wrap justify-center">
            {repository}
          </div>
        </div>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add repository</DrawerTitle>
            <DrawerDescription>
              Add projects from github and collaborate with other developers..
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="grid gap-4 py-4">
              <div className="grid items-center gap-4">
                <Label htmlFor="name" className="w-fit">
                  Name:
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Repository Name" ref={inputRef} />
                  </SelectTrigger>
                  <SelectContent>
                    {repos.map((repo) => (
                      <SelectItem value={repo.name}>{repo.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid items-center gap-4">
                <Label htmlFor="username" className="w-fit">
                  Skills Required:
                </Label>
                <Textarea
                  className="w-full"
                  ref={tagRef}
                  placeholder="Enter your skills sepreated by comma."
                />
              </div>
            </div>
            <Button onClick={submitRepo}>Submit</Button>
            <DrawerClose>
              <Button variant="outline" className="w-full" id="close">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Home;
