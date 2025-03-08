import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Find a - Find a soulmate
			</title>
			<meta name={"description"} content={"Need a BF/ Well look no further, here you can find tips and tricks to get yourself your very own teddy bear"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/67c1095ee778710018d7c563/images/1738221390068.jpg?v=2025-03-08T04:04:03.067Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="140px 0" sm-padding="40px 0 40px 0" background="url(https://uploads.quarkly.io/67c1095ee778710018d7c563/images/1738221390068.jpg?v=2025-03-08T04:04:03.067Z) center/cover">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="360px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					HAHAHAHAHAHA
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					YOU'VE BEEN BOYKISSERED
				</Text>
				<Text font="--base">
					HAHAHAHAHAHAHAHAHAA I LOVE KISSING BOYS HAHAHAHAHA INF LABEL SUPPORTS PRIDE HAHAHAHAHHAHAHAHAHAHAHAHAAH I LOVEEEEEE DONALD TRUMP I WANT TO SUCK HIM SO BAD HAHAHAHAHAHA
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"67c1095ee778710018d7c561"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});