import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Abdulmajeed82",
    icon: Icons.gitHub,
    link: "https://github.com/Abdulmajeed82",
  },
  {
    name: "LinkedIn",
    username: "Abdulmajeed Abdullateef",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/Abdulmajeedabdullateef/",
  },
  {
    name: "Twitter",
    username: "@Abdulma51010322",
    icon: Icons.twitter,
    link: "https://twitter.com/Abdulma51010322",
  },
  {
    name: "Gmail",
    username: "majeedlateef",
    icon: Icons.gmail,
    link: "mailTo:majeedlateef82@gmail.com",
  },
];
