// import Microlink from '@microlink/react'
import Image from "next/image"

const ProjectImage = (props) => {
  return <Image alt={props.name} src={props.image} width={200} height={200} />
};

export default ProjectImage;