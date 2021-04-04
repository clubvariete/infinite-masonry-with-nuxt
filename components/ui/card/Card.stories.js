// card.stories.js

import Card from "./Card.vue";

// Primary Card
import CardImage from "./CardImage.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue";

// Describe card component
export default {
  title: "JS/Card",
  component: Card,
  args: {
    "primaryColor": "green-400",
    "padding": 3,
    "borderWidth": 2,
    "borderRadius": "2xl",
    "cardBg": "gray-100",
    "invert": true,
    "name": "Card Design Project"
  },
  argTypes: {
    "borderRadius": {
      "control": {
        "type": "select",
        "options": ["2xl", "3xl", "lg", "md"]
      },
      "defaultValue": "3xl"
    },
    "borderWidth": {
      "control": {
        "type": "radio",
        "options": [0, 2, 4, 8]
      },
      "defaultValue": 2
    }
  }
}

// Define template for Primary Story
const PrimaryTemplate = (args, { argTypes }) => ({
  components: { Card, CardHeader, CardFooter, CardImage },
  props: Object.keys(argTypes),
  template: `
  <card
    :primary-color="primaryColor"
    :padding="padding"
    :border-width="borderWidth"
    :border-radius="borderRadius"
    :card-bg="cardBg"
		class="w-72"
  >
	  <card-header>
      <span> Tailwind </span>
      <span> Masonry Grid </span>
    </card-header>
    <card-image src="user.png" gutter> </card-image>
    <card-header class="text-gray-700">
      <span> Infinite Loading </span>
      <span> Nuxt </span>
    </card-header>
    <card-footer
      :invert="invert"
			:name="name"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});

// named export Primary to create respective story
export const Primary = PrimaryTemplate.bind({});