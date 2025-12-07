import { BlueprintRoleHub } from '../../components/BlueprintRoleHub';
import { getArticlesByRole, getRoadmap } from '../../lib/content';

// Generate params for static export
export function generateStaticParams() {
    return ['individual', 'student', 'parent', 'smb', 'educator'].map((role) => ({
        role,
    }));
}

export default async function Page({ params }: { params: { role: string } }) {
    const { role } = params;
    const articles = await getArticlesByRole(role);
    const roadmap = await getRoadmap(role);

    return <BlueprintRoleHub role={role} articles={articles || []} roadmap={roadmap} />;
}
