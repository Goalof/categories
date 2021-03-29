import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { TiVideo } from "react-icons/ti";
import { GiPlayButton } from "react-icons/gi";
import { MdSystemUpdateAlt, MdContentCopy } from "react-icons/md";
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
		<Section id="catblock" padding="30px 0 80px 0" color="--light" background="--color-light">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Stack width="100%" gap="--cmp-stack-gap-small">
				{"    "}
				<StackItem width="70%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					<Text font="--headline2" color="--dark" margin="0px 0px 0px 0px" lg-font="normal 700 30px/1.2 Source Sans Pro, sans-serif">
						Categories
					</Text>
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="30%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Link
						href="#"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						text-decoration-line="initial"
						padding="10px 22px 10px 22px"
						color="--light"
						font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="2px"
						border-radius="50px"
						hover-transform="translateY(-3px)"
						margin="3px 0px 0px 0px"
						text-align="center"
						background="--color-indigo"
						lg-font="normal 600 15px/1.5 --fontFamily-googleSourceSansPro"
					>
						All Components
					</Link>
					{"            "}
				</StackItem>
			</Stack>
			<Stack
				width="100%"
				gap="--cmp-stack-gap-small"
				margin="20px 0px 0px 0px"
				border-radius="12px"
				box-shadow="0 10px 30px -12px rgba(0, 0, 0, 0.25)"
			>
				{"    "}
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					border-radius="12px 0px 0px 12px"
					border-width="0px 0.3px 0px 0px"
					border-color="rgba(111, 131, 159, 0.15)"
					border-style="solid"
					transition="border 0.1s ease-in-out 0s;"
					hover-padding="0px 0px 0px 0px"
					hover-margin="0px 0px 0px 0px"
					lg-width="50%"
					lg-border-radius="12px 0px 0px 0px"
					background="#FCFCFF"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
					/>
					{"        "}
					<Icon
						category="ti"
						icon={TiVideo}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Multimedia
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						Video and Aidoplayer, Slider image и пр.{" "}
					</Text>
					<Link
						href="/multimedia"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					background="#FCFCFF"
					border-width="0px 0.3px 0px 0px"
					border-style="solid"
					border-color="rgba(111, 131, 159, 0.15)"
					lg-width="50%"
					lg-border-radius="0px 12px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
					/>
					{"        "}
					<Icon
						category="gi"
						icon={GiPlayButton}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Animation
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						Text loop, Marquue и пр.{" "}
					</Text>
					<Link
						href="/animation"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					background="#FCFCFF"
					border-width="0px 0.3px 0px 0px"
					border-style="solid"
					border-color="rgba(111, 131, 159, 0.15)"
					lg-width="50%"
					lg-border-radius="0px 0px 0px 12px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
					/>
					{"        "}
					<Icon
						category="md"
						icon={MdSystemUpdateAlt}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Integration
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						LiveChat, JivoSite и пр.
					</Text>
					<Link
						href="/integration"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="0px 0px 0px 0px"
					background="#FCFCFF"
					border-radius="0px 12px 12px 0px"
					lg-width="50%"
					lg-border-radius="0px 0px 12px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="20px 20px 20px 20px"
						color="--dark"
					/>
					{"        "}
					<Icon
						category="md"
						icon={MdContentCopy}
						color="--indigo"
						size="50px"
						border-width="2px"
						border-style="solid"
						padding="20px 20px 20px 20px"
						border-radius="100px"
						border-color="--color-indigo"
					/>
					<Text font="normal 600 24px/1.5 --fontFamily-sans" margin="20px 0px 3px 0px" display="inline-block" color="--dark">
						Content
					</Text>
					<Text
						font="normal 600 12px/1.5 --fontFamily-sans"
						margin="0px 0px 20px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="center"
					>
						Price, Table и пр.
					</Text>
					<Link
						href="/content"
						text-decoration-line="initial"
						background="--color-indigo"
						color="--light"
						padding="10px 22px"
						border-radius="8px"
						text-transform="uppercase"
						font="normal 500 18px/1.5 --fontFamily-googleSourceSansPro"
						letter-spacing="1px"
						transition="transform 0.1s ease-in-out 0s;"
						transform="translateY(0px)"
						hover-transform="translateY(-2px)"
					>
						Перейти
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
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
	</Theme>;
});