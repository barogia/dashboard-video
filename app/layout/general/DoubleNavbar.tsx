import { useState } from "react";
import { createStyles, Navbar, Group, Code, Box, Divider } from "@mantine/core";
import {
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconLogout,
  IconHome,
  IconDatabase,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import { color } from "~/config/color";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: (theme.fn.variant({
      variant: "filled",
      color: "#363740" || color.main,
    }).background = "#363740"),
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background!,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `1 solid ${theme.fn.lighten(
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background!,
      0.1
    )}`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `1 solid ${theme.fn.lighten(
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background!,
      0.1
    )}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        (theme.fn.variant({
          variant: "filled",
          color: theme.primaryColor,
        }).background = "white"),
        0.1
      ),
    },
  },

  linkIcon: {
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(
        (theme.fn.variant({
          variant: "filled",
          color: theme.primaryColor,
        }).background = "white"),
        0.15
      ),
    },
  },
}));

const data = [
  { link: "/", label: "Trang chủ", icon: IconHome },
  { link: "", label: "Quản lí Camera", icon: IconDatabase },
  { link: "", label: "Cảnh báo", icon: IconFingerprint },
  { link: "", label: "Khu vực", icon: IconKey },
  { link: "", label: "Thông kê", icon: IconDatabaseImport },
  { link: "", label: "Liên hệ", icon: Icon2fa },
];

const footerData = [
  { link: "", label: "Cài đặt", icon: IconSettings },
  { link: "", label: "Đăng kí", icon: IconLogout },
];

export function NavbarSimpleColored() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const linksRender = (data: any[]) => {
    return data.map((item) => (
      <a
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active,
        })}
        href={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    ));
  };

  return (
    <Navbar
      height={"100vh"}
      width={{ sm: 300 }}
      className={classes.navbar + " bao"}
    >
      <Navbar.Section sx={{ marginTop: "20px" }} p="md">
        <Group className={classes.header} position="center">
          <MantineLogo size={28} inverted />
        </Group>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            "> a": { padding: "10px 20px" },
            marginTop: "20px",
          }}
        >
          {linksRender(data)}
        </Box>
      </Navbar.Section>

      <Divider sx={{ width: "100%" }} />

      <Navbar.Section p="md">
        {/* <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            "> a": { padding: "10px 20px" },
            marginTop: "20px",
          }}
        >
          {linksRender(footerData)}
        </Box>
      </Navbar.Section>
    </Navbar>
  );
}
