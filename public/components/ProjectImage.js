import { LinkPreview } from '@dhaiwat10/react-link-preview';

const ProjectImage = (props) => {
  return <LinkPreview url={props.image}  width="300px" height="300px" className='card-container' showLoader="true" />;
};

export default ProjectImage;