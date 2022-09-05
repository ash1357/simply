import ApplicantTracking from '../../../content/assets/hiring/header/icons/Applicant-Tracking.png';
import CreateJobs from '../../../content/assets/hiring/header/icons/Create-Jobs.png';
import EasyJobApplications from '../../../content/assets/hiring/header/icons/Easy-Job-Applications.png';
import PostJobs from '../../../content/assets/hiring/header/icons/Post-Jobs.png';
import SymplyQRCode from '../../../content/assets/symply_qrcode.png';

const CardContent = [
  {
    title: 'Create Jobs',
    description: 'Create job descriptions & save templates for later use',
    image: CreateJobs,
  },
  {
    title: 'Post Jobs',
    description: 'Post jobs to free & paid job boards. Export QR Codes for your storefront!',
    image: PostJobs,
    additionalImage: SymplyQRCode,
  },
  {
    title: 'Easy Job Applications',
    description: 'Candidates can easily complete job applications in minutes, via sms and the web',
    image: EasyJobApplications,
  },
  {
    title: 'Applicant Tracking',
    description: 'Monitor all applicants at each stage & easily move them between stages',
    image: ApplicantTracking,
  },
];

export default CardContent;
