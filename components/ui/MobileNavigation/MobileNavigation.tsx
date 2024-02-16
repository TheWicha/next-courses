import React from "react";
import { Drawer, IconButton, List } from "@material-tailwind/react";
import NavItems from "@/components/ui/NavItems/NavItems";

const MobileNavigation: React.FC<MobileNavigationPropsType> = ({
  path,
  open,
  closeDrawer,
}) => {
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        placeholder={undefined}
        className="z-10 border"
      >
        <div className="flex items-center justify-end py-1 px-4">
          <IconButton
            className="flex-end "
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
            placeholder={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List placeholder={undefined}>
          <NavItems path={path} closeDrawer={closeDrawer} />
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default MobileNavigation;
