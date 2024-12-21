import image from "./HeroSection.svg";
import classes from "./HeroSection.module.css";
import { Button, Container, Group, Text, Title } from "@quassel/ui";
import { i18n } from "../stores/i18n";
import { useStore } from "@nanostores/react";
import { Link } from "@tanstack/react-router";

const messages = i18n("heroSection", {
  title: "LEMON",
  subtitle: "Gather language exposure",
  toFormAction: "Questionnaire",
  toAdminAction: "Administration",
});

export function HeroSection() {
  const t = useStore(messages);
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>{t.title}</span>
          </Title>
          <Text c="dimmed" mt="md">
            <b>L</b>anguage <b>E</b>xposure questionnaire for <b>M</b>ultilinguals <b>On</b>line
          </Text>

          <Group mt={30}>
            <Button size="md" renderRoot={(props) => <Link to="/questionnaire" {...props} />}>
              {t.toFormAction}
            </Button>
            <Button variant="default" size="md" renderRoot={(props) => <Link to="/administration" {...props} />}>
              {t.toAdminAction}
            </Button>
          </Group>
        </div>
        <img src={image} alt="Lemon family" className={classes.image} />
      </div>
    </Container>
  );
}
