import React from 'react';
import { useParams } from 'react-router-dom';
import { DivisionsShowcase } from '../components/DivisionsShowcase';
import { PageHeader } from '../components/PageHeader';
import { SeoHead } from '../components/SeoHead';
import {
  DIVISION_SEO,
  ROUTE_SEO,
  buildBreadcrumbSchema,
  buildDivisionServiceSchema,
} from '../config/seoConfig';
import { DIVISIONS, DivisionId } from '../data/ameraldData';

const VALID_IDS: DivisionId[] = ['consulting', 'protective', 'cooperative', 'hr'];

export const DivisionsPage: React.FC = () => {
  const { divisionId } = useParams<{ divisionId?: string }>();

  const isSpecificDivision = Boolean(
    divisionId && VALID_IDS.includes(divisionId as DivisionId)
  );

  const resolvedId: DivisionId = isSpecificDivision
    ? (divisionId as DivisionId)
    : 'consulting';

  const activeDivision =
    DIVISIONS.find((division) => division.id === resolvedId) ?? DIVISIONS[0];

  const seoMeta = isSpecificDivision
    ? DIVISION_SEO[resolvedId]
    : ROUTE_SEO.divisionsIndex;

  const breadcrumbs = isSpecificDivision
    ? [
        { name: 'Home', path: '/' },
        { name: 'Divisions', path: '/divisions' },
        { name: activeDivision.tabLabel, path: `/divisions/${activeDivision.id}` },
      ]
    : [
        { name: 'Home', path: '/' },
        { name: 'Divisions', path: '/divisions' },
      ];

  return (
    <>
      <SeoHead
        {...seoMeta}
        structuredData={[
          buildBreadcrumbSchema(breadcrumbs),
          buildDivisionServiceSchema(activeDivision),
        ]}
      />

      <PageHeader
        kicker="Business Divisions"
        title={activeDivision.entityName}
        description={activeDivision.description}
        currentPageLabel={`Divisions · ${activeDivision.tabLabel}`}
      />

      <DivisionsShowcase activeId={resolvedId} />
    </>
  );
};
