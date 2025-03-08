import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Section, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				At INF Label we are more than just a music distributor we are a movement dedicated to empowering independent artists. Inspired by the success of 0to8, we strive to break barriers and provide musicians with the tools, support, and reach they need to thrive in today’s digital world.
				<br />
				<br />
				Our mission is simple:{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					to connect artists with the global audience they deserve.
				</Strong>
				{" "}Through innovative distribution strategies, industry connections, and cutting-edge marketing, we ensure that every song reaches the right ears on platforms like Spotify, Apple Music, YouTube, and beyond.
				<br />
				<br />
				Whether you're an emerging talent or an established artist, 0NX Records is here to help you navigate the ever-evolving music industry. Join us, and let’s turn your passion into a legacy.
				<br />
				<br />
				🚀{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Distribute.
				</Strong>
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
						With the help of INF Label, we can help! Our team will try and reply as fast as possible and we'll get your music out!
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
											Music Info Demo Link
										</Text>
										<Input as="textarea" rows="4" width="100%" name="message" />
									</Box>
								</Box>
							</Formspree>
							<Button type="link" href="https://pornhub.cA" target="_blank">
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
					(C) 2025 INF Label. All rights reserved
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