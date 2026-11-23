import React from 'react';
import { useParams } from 'react-router-dom';
import { DivisionsShowcase } from '../components/DivisionsShowcase';
import { PageHeader } from '../components/PageHeader';
import { DIVISIONS, DivisionId } from '../data/ameraldData';

const VALID_IDS: DivisionId[] = ['consulting', 'protective', 'cooperative', 'hr'];

export const DivisionsPage: React.FC = () => {
  const { divisionId } = useParams<{ divisionId?: string }>();

  const resolvedId: DivisionId = VALID_IDS.includes(divisionId as DivisionId)
    ? (divisionId as DivisionId)
    : 'consulting';

  const activeDivision =
    DIVISIONS.find((division) => division.id === resolvedId) ?? DIVISIONS[0];

  return (
    <>
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
