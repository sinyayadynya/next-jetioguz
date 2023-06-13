import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { DrupalNode } from "next-drupal"

import { useTranslation } from "next-i18next";
import { DrupalParagraph } from 'next-drupal';
import { Paragraph } from "./paragraph";
// import ContactForm from 'components/webform--contact'

// const Paragraph = dynamic(() => import('../components/paragraph'))
const ContactForm = dynamic(() => import('../components/webform--contact'), { ssr: false })

export interface NodePlanningProps {
    node: DrupalNode;
}

export function NodePlanning({ node }: NodePlanningProps) {
    const router = useRouter()
    const field_sections: DrupalParagraph[] = node.field_sections

    const pathSegments = router.asPath.split('/')
    const lastTwoSegments = pathSegments.slice(-2).join('/')

    const showContactForm = lastTwoSegments.startsWith('planning/contact')

    return (
        <div>
            {field_sections?.map((section) => (
                <Paragraph key={section.id} paragraph={section} />
            ))}

            {showContactForm && <ContactForm />}
        </div>
    );
}
