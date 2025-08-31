"use client";
import { Container, Group, Button, Text, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";

import { CreateJobModal } from "../CreateJobModal/CreateJobModal";

// This is a placeholder for your logo component/image
const Logo = () => {
  return (
    <div
      style={{
        width: "44px",
        height: "44.68px",
        background: "linear-gradient(to bottom right, #a855f7, #6366f1)",
        borderRadius: "8px",
        marginTop: "1.66px",
      }}
    />
  );
};

const navItems = [
  { label: "Home", width: 102 },
  { label: "Find Jobs", width: 130 },
  { label: "Find Talents", width: 146 },
  { label: "About us", width: 123 },
  { label: "Testimonials", width: 148 },
];

// Accept refetchJobs as a prop
interface HeaderProps {
  refetchJobs: () => void;
}

export default function Header({ refetchJobs }: HeaderProps) {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    console.log("Header rendered. opened:", opened);
  });
  return (
    <>
      <Container
        size="xl"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "16px",
        }}
      >
        <header
          style={{
            width: "100%", // allow container to grow
            maxWidth: "890px",
            height: "80px",
            backgroundColor: "#FFFFFF",
            borderRadius: "122px",
            border: "1px solid #FCFCFC",
            boxShadow: "0px 20px 20px 0px #7F7F7F26",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "20px", // reduced from 26px
            paddingRight: "20px", // reduced from 26px
            zIndex: 10,
            position: "relative",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11px",
              width: "100%",
            }}
          >
            <Logo />
            {navItems.map((item) => (
              <Text
                key={item.label}
                component="a"
                href="#"
                fw={600}
                style={{
                  width: `${item.width}px`,
                  height: "48px",
                  borderRadius: "12px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: "#303030",
                  cursor: "pointer",
                  background: "none",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                className="nav-link"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#F3F0FF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "none")
                }
              >
                {item.label}
              </Text>
            ))}
            <Button
              styles={{
                root: {
                  width: "123px",
                  minWidth: "123px",
                  height: "38px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(90deg, #a855f7 0%, #6366f1 100%)",
                  boxShadow: "0px 4px 12px 0px #7F7F7F26",
                  padding: 0,
                  marginLeft: "8px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                  cursor: "pointer",
                },
                label: {
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#fff",
                  padding: "0 16px",
                },
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#7C3AED")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#8B5CF6")
              }
              onClick={() => {
                open();
              }}
            >
              Create Jobs
            </Button>
          </div>
        </header>
      </Container>
      <CreateJobModal opened={opened} close={close} refetchJobs={refetchJobs} />
    </>
  );
}
