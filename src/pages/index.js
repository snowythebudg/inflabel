import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Find a - Find a soulmate
			</title>
			<meta name={"description"} content={"Need a BF/ Well look no further, here you can find tips and tricks to get yourself your very own teddy bear"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/67c1095ee778710018d7c563/images/1738221390068.jpg?v=2025-03-08T04:04:03.067Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Reasons to get a BF
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Having a boyfriend can bring a unique blend of companionship and understanding that enriches life in countless ways. You gain a partner who inherently understands certain shared experiences, from navigating societal expectations to appreciating similar interests. The emotional connection can feel effortless as you both speak the same unspoken language of shared perspectives. Beyond the deep bond, you'll have someone to adventure with, whether it's hiking remote trails or exploring new restaurants in the city. A boyfriend can be your steadfast supporter through challenges, your enthusiastic cheerleader during triumphs, and your comfortable silence during quiet moments. The relationship offers both the comfort of understanding and the excitement of discovering new dimensions of connection, creating a partnership where you can truly be yourself while growing together.
				<br />
				<br />
				Reasons why you should get a BF
				<br />
				<br />
				Less Drama – Many guys tend to be more laid-back and direct, which can mean fewer misunderstandings.
				<br />
				{"\n"}Shared Interests – If you're both into gaming, sports, tech, or cars, there's a good chance you’ll naturally bond over common hobbies.{"\n"}
				<br />
				Chill Maintenance – Some guys are just happy to hang out, grab food, and vibe without overcomplicating things.{"\n"}
				<br />
				Stronger Emotional Understanding – Since you both experience the world as men, it can be easier to relate to each other's struggles and perspectives.
No Need to Decode Signals – Guys are often more straightforward with their feelings, which can make communication easier.{"\n"}
				<br />
				Better Cuddles – Let’s be real—big arms, strong hugs, and warmth? Yes, please.{"\n"}
				<br />
				More Fun in the Gym – Having a gym buddy who’s also your boyfriend? Solid motivation.{"\n"}
				<br />
				Less Pressure on Gender Roles – A relationship between two guys tends to break away from traditional expectations, letting both people just be themselves.{"\n"}
				<br />
				Mutual Grooming Benefits – Sharing skincare, cologne, or fashion advice? Elite.{"\n"}
				<br />
				Double the Wardrobe – If you have a similar size and style, your closet just got an upgrade.
			</Text>
		</Section>
		<Section background="--color-dark" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--light"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							CONTACT US{" "}
						</Text>
					</Box>
					<Text margin="0px 0px 0px 0px" color="#ffffff" font="50 px">
						Do you need help finding a boyfriend, well look no further!
					</Text>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
							<Formspree endpoint="mpwqvwrz">
								<Box
									gap="16px"
									display="grid"
									flex-direction="row"
									flex-wrap="wrap"
									grid-template-columns="repeat(2, 1fr)"
									grid-gap="16px"
								>
									<Box sm-width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0" color="#ffffff">
											Name
										</Text>
										<Input width="100%" name="name" type="text" />
									</Box>
									<Box sm-width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0" color="#ffffff">
											Email
										</Text>
										<Input width="100%" type="email" name="email" />
									</Box>
									<Box display="flex" flex-direction="column" grid-column="1 / span 2">
										<Text font="--base" margin="0 0 4px 0" color="#ffffff">
											What i need in a BF
										</Text>
										<Input as="textarea" rows="4" width="100%" name="message" />
									</Box>
								</Box>
							</Formspree>
							<Button type="link" href="https://pornhub.com" target="_blank">
								Send
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 30px 0px"
					font="--headline1"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Contacts{"  "}
				</Text>
				<Link
					href="mailto:blank?hello@company.com"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				/>
				<SocialMedia margin="0px 0px 0px 0px" youtube="https://www.youtube.com/@Onix_Rblx" discord="https://discord.gg/KkH2y8fYwu">
					<Override
						slot="link"
						border-radius="50%"
						color="--grey"
						hover-color="--light"
						background="#191E22"
						hover-background="--color-primary"
						margin="0 5px 0 5px"
						padding="5x 5px 5px 5px"
						width="48px"
						height="48px"
						align-items="center"
						display="flex"
						justify-content="center"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						href="https://youtube.com/@mintybudgie"
					/>
					<Override
						slot="icon"
						color="--light"
						padding="7px 7px 7px 7px"
						border-width="0px"
						size="38px"
						border-radius="50px"
					/>
				</SocialMedia>
			</Box>
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Link
					href="mailto:blank?hello@company.com"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				/>
				<Text margin="0px 0px 48px 0px" font="--headline3" color="--light" text-align="center">
					(C) 2025 FindABF Publications LLC. All rights reserved
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