import React from "react";
import Container from "./Container";
import {
  IconButton,
  Input,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  InboxIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <section className="border-b border-b-gray-500">
      <Container>
        <div className="flex justify-between items-center py-4 w-full">
          {/* Logo */}{" "}
          <div className="flex items-center flex-col gap-2">
            <img
              className="h-8 select-none"
              src="https://images.vexels.com/media/users/3/324280/isolated/preview/9d52451aee79d0393830d6dca2afe6b7-book-icon-in-red-color.png"
              alt=""
            />
            <p className="text-sm font-bold">Manhwa</p>
          </div>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
              className="w-12 lg:w-96"
            />
          </div>
          {/* Drawer Btn */}
          <IconButton
            className="dark:text-white"
            variant="text"
            size="lg"
            onClick={openDrawer}
          >
            {isDrawerOpen ? (
              <XMarkIcon className="h-8 dark:text-white w-8 stroke-2" />
            ) : (
              <Bars3Icon className="h-8 dark:text-white w-8 stroke-2" />
            )}
          </IconButton>
        </div>
        {/* Drawer */}
        <Drawer
          open={isDrawerOpen}
          onClose={closeDrawer}
          placement="right"
          className="flex flex-col dark:bg-blue-gray-900 bg-white text-gray-900 dark:text-white"
        >
          <List>
            <ListItem className="dark:text-white text-black">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem className="dark:text-white text-black">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <DarkModeToggle/>
            <ListItem className="dark:text-white text-black">
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Drawer>
      </Container>
    </section>
  );
};

export default Header;
