import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { Label, Paragraph, RadioGroup, XStack, YStack } from "tamagui";
import { config } from "@tamagui/config/v3";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export function RadioGroupItemWithLabel(props: {
  value: string;
  label: string;
}) {
  const id = `radiogroup-${props.value}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} accessible>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label htmlFor={id}>{props.label}</Label>
    </XStack>
  );
}

export default () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <YStack justifyContent="center" flex={1}>
        <RadioGroup>
          <RadioGroupItemWithLabel value="1" label="First value" />
          <RadioGroupItemWithLabel value="2" label="Second value" />
          <RadioGroupItemWithLabel value="3" label="Third value" />
        </RadioGroup>
      </YStack>
    </TamaguiProvider>
  );
};
