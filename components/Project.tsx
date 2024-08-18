export type ProjectProps = {
  title: string;
  description: string;
  link: string;
};
const Project = ({ title, description, link }: ProjectProps) => {
  return (
            <div className='flex flex-col gap-3 w-44'>
              <a href={link} target='_blank'><div className='font-normal underline'>{title}</div></a>
              <div>{description}</div>
            </div>
  )
}
export default Project;
