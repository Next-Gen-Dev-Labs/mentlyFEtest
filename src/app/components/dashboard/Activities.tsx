import { Recent } from "./MentorCard"


export const Activites = () => {
  const Activity = [
    {
      title:'KYC Verification',
      period:'45 new persons just signed up on Mently.',
      details:'25 minutes Ago',
      image: 'Ellipse.svg'
    },
    {
      title:'New User Sign Up!',
      period:'45 new persons just signed up on Mently.',
      details:'25 minutes Ago',
      image: 'Ellipse.svg'
    },
    {
      title:'Withdrawal Request',
      details:'45 new persons just signed up on Mently.',
      period:'25 minutes Ago',
      image: 'Ellipse.svg'
    },
  ]
  return(
    <div className="w-full p-3 ">
      {Activity?.map((item, index) => (
        <Recent key={index} title={item?.title} details={item?.details} period={item?.period}
          image={item?.image} />
      ))}
    </div>
  )
}