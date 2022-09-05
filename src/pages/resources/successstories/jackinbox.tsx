import React, { useEffect } from 'react';
import SuccessLayout from '../../../layout/SuccessLayout';
import JackInBoxLogo from '../../../../content/assets/trustedBrands/JIB_logo.png';

const JackInBox = (props: any) => {
  const { location } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SuccessLayout
      title="Jack In the Box"
      path={location?.pathname}
      description="Jack in the Box Franchise Decreases Time Spent on Payroll by 60%"
      metaTitle="Jack In the Box"
      logo={JackInBoxLogo}
      HeaderTitleList={[
        'Jack in the Box',
        'Jack in the Box Franchise Decreases Time Spent on Payroll by 60%',
      ]}
      InfoList={[
        {
          title: 'Client Since',
          subtitle: '2020',
        },
        {
          title: 'Size',
          subtitle: '70 employees',
        },
        {
          title: 'Industry',
          subtitle: 'Restaurants',
        },
        {
          title: 'Location',
          subtitle: 'Southern California',
        },
      ]}
      backgroundColor="#d6eef0"
      mobileColor="#d6eef0"
      HeaderList={[
        { content: '60% decrease in time spent on payroll' },
        { content: '60% increase in direct deposit enrollment' },
        { content: 'Custom integration built with Altametrics' },
      ]}
      FirstRowList={[
        {
          title: '',
          subtitle: [
            'Halabian inc. is a franchisee of Jack in the Box with 3 locations spanning across southern California. When they discovered Symply, they were undergoing a sudden and unexpected change of ownership that put operations at the top of their focus.',
            'Not only were the new owners facing the challenge of rapidly learning and improving current operations, but they were also under pressure to adhere to new demands from corporate. The Jack in the Box franchise introduced a new requirement that all locations use Altametrics Business Management software.',
            'Halabian inc quickly had to juggle the implementation of two brand new software systems.',
          ],
        },
        {
          title: 'The Challenge',
          subtitle: [
            'Although adopting Altametrics was highly beneficial for many operators—one long-term franchise owner, Steven Flohr, even described it as a “home run” for the fast-food chain— it actually set Halabian inc back quite a bit regarding efficiency.',
            'Altametrics is where every employee clocks and logs their hours each shift, but payroll is handled outside the system. Their former time tracking software could export employees’ hours, and from there, the manager could paste those hours into the payroll table. It wasn’t the best process, but it was one they had grown familiar with and optimized over time.',
            'Understandably, the owners, Ben and Joe Halabian, were not happy with how the change impacted their payroll process. Knowing a better way was possible, Halabian inc tasked Symply with building a feature to extract the employees’ hours from Altametrics.',
          ],
        },
        {
          title: 'The Solution',
          subtitle: [
            'Symply got straight to work with the owners, manager, accountant, and Jack in the Box corporate to understand the business’s needs and software requirements the project would entail. After collaborating, the team established two primary goals for Halabian inc: reducing the time to process payroll and minimizing errors while transferring data.',
            'To solve the problem, Symply developed a custom integration between its payroll & HR software and Jack in the Box’s Altametrics system.',
            'The integration syncs employees’ hours between the two systems by importing hours into Symply at the click of a button. Maricela, the franchise store manager, just has to review the hours and wages and submit the payroll. Maricela explains, “Before I needed to enter each employee’s hours manually, now all I have to do is download it and review it.”',
            'Instead of building a replica solution to bring Halabian back to its original efficiency levels, Symply harvested a solution to exceed the prior process.',
          ],
          quote:
            'Before I needed to enter each employee’s hours manually, now all I have to do is download it and review it.',
          quoteAuthor: 'Maricela Lopez, Manager',
        },
        {
          title: 'Impacts',
          subtitle: [
            'After implementing the Altametrics integration with Symply, employees’ hours are now imported into the payroll table from the Altametrics business management system, regardless of which location the employee works.',
            'By syncing the hours directly to Symply, the risk of information errors is also eliminated. Altametrics remains the source of truth for employees’ hours, and the data is delivered without any additional intervention.',
            'The previous process involved retrieving hours from the system and manually keying them into a worksheet. Submitting payroll took up two hours to complete and was reduced down to 40 minutes— a 60% decrease in time spent processing payroll due to Symply.',
          ],
        },
        {
          title: 'Bonus Benefits',
          subtitle: [
            'After signing up with Symply, Halabian reduced the overall time spent on all payroll activities significantly. Importing hours was just the beginning.',
            '<b>60% Increase in Direct Deposit Enrollment</b>',
            'Before Symply, Halabian did not have any employees enrolled in direct deposit. All checks were delivered to a single location and the manager, Maricela, was responsible for hand-delivering checks to the other two stores approximately 20 miles apart.',
            'Now, Maricela says, about 60% of their workforce is enrolled in direct deposit and continuously increasing.',
            '<b>80% Enrollment in Employee Self-Service Profiles</b>',
            'The increase in popularity for direct deposit is largely due to the employee self-service profiles through Symply. Employees can log into their account, enter their banking information, and change their payment method independently.',
            'In the past, employees weren’t clear how to enroll in direct deposit, or they didn’t have a checkbook to bring in a voided check. The self-service model makes it easy for employees to adjust their payment details and relieves the manager from making necessary updates in the system and storing documents securely. But, direct deposit isn’t the only benefit of self-service profiles.',
            'Even employees without direct deposit benefit from their profile as it allows them to update their personal information, emergency contacts, and tax withholdings from anywhere online. When employees can manage their details in a centralized location, it minimizes common errors involved in transferring data.',
            'Maricela is confident that the move to Symply has improved the way they work by saving a lot of time and completing tasks online.',
          ],
        },
      ]}
    />
  );
};

export default JackInBox;
