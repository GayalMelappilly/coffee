import { Amaranth, Bebas_Neue, Poppins, Roboto, Unkempt } from "next/font/google";

export const robotoItalic = Roboto({
  weight: "900",
  style: 'italic',
  subsets: ['latin']
});

export const robotoRegular = Roboto({
  weight: "700",
  style: 'normal',
  subsets: ['latin']
});

export const poppinsLightRegular = Poppins({
  weight: "300",
  style: 'normal',
  subsets: ['latin']
});

export const poppins = Poppins({
  weight: '400',
  style: "normal",
  subsets: ["latin"]
});

export const poppinsRegular = Poppins({
  weight: '600',
  style: "italic",
  subsets: ["latin"]
});

export const poppinsBold = Poppins({
  weight: '700',
  style: "normal",
  subsets: ["latin"]
});

export const poppinsExtraBoldItalic = Poppins({
  weight: "900",
  style: 'italic',
  subsets: ['latin']
});

export const unkempt = Unkempt({
  weight: '700',
  subsets: ['latin']
});

export const amaranth = Amaranth({
  weight: "700",
  subsets: ["latin"]
});

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
});