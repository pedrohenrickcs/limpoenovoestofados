const Title = ({ title }: any) => {
  return ( 
    <h2 className="text-4xl font-semibold py-4 relative text-secondary-text-color">
      {title}
      <span className="w-14 h-1 absolute bg-primary-bg-color bottom-0 left-0"></span>
    </h2>
   );
}
 
export default Title;