import React from 'react';
import _ from 'lodash';
import { IconFileText, IconCalendar, IconAlertTriangle, IconCreditCard, IconStar } from '@tabler/icons-react';

const terms = [
    {
        q1: "Service Scope: Our car detailing services include exterior and interior cleaning, waxing, polishing, and other related services as outlined in our service menu. Additional services may be available upon request and will be charged accordingly.",
        icon: <IconFileText className="inline-block mr-2" />
    },
    {
        q2: "Appointment Policy: All appointments must be scheduled in advance either through our online booking system, by phone, or in person. We require at least 24 hours' notice for cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee.",
        icon: <IconCalendar className="inline-block mr-2" />
    },
    {
        q3: "Vehicle Condition: Clients are responsible for disclosing any pre-existing damage, scratches, or other imperfections on their vehicle prior to the commencement of detailing services. While we take utmost care during the detailing process, we are not liable for any damage that was not disclosed beforehand.",
        icon: <IconAlertTriangle className="inline-block mr-2" />
    },
    {
        q4: "Payment Terms: Payment is due in full upon completion of services unless otherwise agreed upon in advance. We accept cash, credit/debit cards, and other forms of electronic payment. A deposit may be required for larger or specialized services.",
        icon: <IconCreditCard className="inline-block mr-2" />
    },
    {
        q5: "Satisfaction Guarantee: We strive to provide the highest quality of service to our clients. If for any reason you are not satisfied with the results of the detailing service, please contact us within 48 hours of service completion, and we will make every effort to address your concerns. Refunds or complimentary re-detailing may be offered at our discretion.",
        icon: <IconStar className="inline-block mr-2" />
    }
];

const Terms = () => {
    return (
        <div className='md:container sm:w-5/6 xl:w-3/5 px-8 py-10 mx-auto font-sans leading-normal tracking-normal'>
            <div className="text-gray-700 overflow-hidden">
                <div className='text-blue-400 text-2xl'>Terms and Conditions</div>
                <div className='md:ps-16 pt-16'>
                    <ul className="text-lg">
                        {_.map(terms, (term) => (
                            <li key={_.uniqueId()} className="mb-4">
                                {term.icon}
                                <strong>{term[Object.keys(term)[0]].split(':')[0]}:</strong>
                                {term[Object.keys(term)[0]].split(':').slice(1).join(':')}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Terms;
