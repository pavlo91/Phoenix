import Badge from 'components/base/Badge';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { members } from 'data/users';

const tags = [
  'Unused_brain',
  'Machine',
  'Coding',
  'Meseeks',
  'Smithpeople',
  'Rick',
  'Biology',
  'Neurology',
  'Brainlessness',
  'Stupidity',
  'Jerry',
  'Not _the_mouse'
];

const TeamMembers = () => {
  return (
    <div>
      <h4 className="text-1100 mb-4">Team members</h4>
      <div className="d-flex mb-8 gap-1">
        {members.slice(0, 5).map(member => (
          <AvatarDropdown key={member.id} user={member} size="xl" />
        ))}
      </div>
      <h4 className="text-1100 mb-4">Tags</h4>
      <div className="d-flex flex-wrap gap-2">
        {tags.map(tag => (
          <Badge variant="tag" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
