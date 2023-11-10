import classNames from 'classnames';
import PhoenixContainer, { PhoenixContainerProps } from './PhoenixContainer';

interface SectionProps extends Omit<PhoenixContainerProps, 'className'> {
  className?: string;
  containerClassName?: string;
}

const Section = ({ className, containerClassName, ...rest }: SectionProps) => {
  return (
    <section className={classNames(className)}>
      <PhoenixContainer className={containerClassName} {...rest} />
    </section>
  );
};

export default Section;
