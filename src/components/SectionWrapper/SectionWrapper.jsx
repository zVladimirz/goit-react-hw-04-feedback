import PropTypes from 'prop-types';
import { TitleSectionWrapper } from './SectionWrapper.styled';

const SectionWrapper = ({ title, children }) => {
  return (
    <section title={title}>
      <TitleSectionWrapper>{title}</TitleSectionWrapper>
      {children}
    </section>
  );
};
SectionWrapper.propTypes = {
  title: PropTypes.string,
  children:PropTypes.node,
};

export default SectionWrapper;
