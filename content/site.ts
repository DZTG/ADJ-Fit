export const contactEmail = "alexdeajue@gmail.com";

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/alexdeajue/",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@alexdeajue",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AlexDeajue",
  },
] as const;

export const credentials = [
  "NASM CPT",
  "Precision Nutrition Coach",
  "Corrective Exercise Specialist",
] as const;

export const stats = [
  { value: "200+", label: "Clients Coached" },
  { value: "10", label: "Years Experience" },
  { value: "95%", label: "Success Rate" },
] as const;

export const aboutParagraphs = [
  "Alex started training at 12 years old, watching his dad work out in the basement. What began as a way to build muscle and confidence eventually turned into a calling.",
  "Coaching found him at a point in life when he knew he wanted to help people, even if he did not yet know exactly what that would look like. Today, that purpose shows up in every program he builds.",
  "His philosophy is simple: progress over perfection. Alex helps clients train to become the best version of themselves, with systems that create real momentum without sacrificing the rest of life.",
] as const;

export const services = [
  {
    title: "1:1 Online Fitness & Nutrition Coaching",
    description:
      "Alex's most hands-on coaching experience for clients who want customized training, nutrition, and accountability.",
    duration: "4 months",
    price: "$425/month or $1,500 paid in full",
    features: [
      "Custom workout program tailored to your goals and fitness level",
      "Custom meal plan and macro targets built around your preferences",
      "1:1 check-ins and direct accountability",
      "Community support and group calls",
    ],
    featured: true,
  },
  {
    title: "Training & Meal Plan",
    description:
      "A self-led option for clients who want structure without ongoing coaching.",
    duration: "12 weeks",
    price: "$25 one-time",
    features: [
      "12-week workout plan",
      "12-week meal plan",
      "Clear structure to follow on your own schedule",
      "Designed around Alex's core coaching principles",
    ],
    featured: false,
  },
  {
    title: "Nutrition Coaching Only",
    description:
      "Focused nutrition support for clients who want a better system around food, recovery, and consistency.",
    duration: "4 months",
    price: "$350/month or $1,200 paid in full",
    features: [
      "Custom meal plan",
      "Macro guidance tailored to your goals",
      "1:1 check-ins",
      "Ongoing accountability and nutrition adjustments",
    ],
    featured: false,
  },
] as const;

export const testimonials = [
  {
    name: "Kenny Campbell",
    result:
      "Lost 20 lb for his wedding and got scouted to become a GQ model",
    quote:
      "Working with Alex literally changed my life. I originally decided to work with him to prepare for my wedding, but I kept up with the plan and quit my job after being scouted by a modeling agency.",
  },
  {
    name: "Michael Sands",
    result:
      "Went from years of yo-yo dieting to losing 50 lb and keeping it off",
    quote:
      "I started working with Alex after trying to do it on my own for so long. I was working out and trying every diet, from low carb to intermittent fasting, and nothing seemed to stick. My biggest takeaway was that there is a fast way and a sustainable way to do things.",
  },
  {
    name: "Mercedes",
    result: "Broke a six-month plateau and lost 20 lb",
    quote:
      "I did not start seeing real progress until I began working with Alex. He makes macro tracking easy to understand, adjusts my plan when needed, and keeps me accountable with consistent weekly check-ins. Since working with him, I have noticed more energy, a slimmer waistline, and a huge boost in confidence overall.",
  },
] as const;

export const featuredTransformation = {
  label: "Featured Transformation",
  name: "Jordan",
  summary:
    "One of Alex's client transformations, highlighting the kind of visible change that comes from structured training, sustainable nutrition, and consistent accountability.",
} as const;
