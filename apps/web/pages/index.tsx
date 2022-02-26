import { Text } from "ui";
import { FullBleedLayout } from "../ui/FullBleedLayout";
import { LoadingNavigation } from "../ui/LandingNavigation";

export default function Web() {
  return (
    <FullBleedLayout
      css={{
        height: "100vh",
        background: "$background",
        px: "$3",
        "@bp1": { px: 0 },
      }}
    >
      <LoadingNavigation />
      <main>
        <Text bold css={{ fontSize: "$7" }}>
          Cffee
        </Text>
      </main>
    </FullBleedLayout>
  );
}
