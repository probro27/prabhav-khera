import { LinkPreview } from '@dhaiwat10/react-link-preview';
// import './styles.scss';

const ProjectImage = (props) => {
  return <LinkPreview url={props.image}  width="300px" height="300px" className='card-container' showLoader="true" />;
};

export default ProjectImage;