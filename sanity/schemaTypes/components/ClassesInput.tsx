import { Grid, Stack, Button } from "@sanity/ui";
import { AddIcon } from "@sanity/icons";
import { randomKey } from "@sanity/util/content";
import {
  ArrayOfObjectsInputProps,
  Reference,
  insert,
  setIfMissing,
  useClient,
} from "sanity";
import { useCallback } from "react";
import { CLASS_GROUPS } from "../classes";

export function ClassesInput(props: ArrayOfObjectsInputProps) {
  const { onChange } = props;

  const client = useClient({ apiVersion: `2024-06-07` });

  // When a class group button is clicked
  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      // Find the value of the button, the group name
      const group = event.currentTarget.value;

      const query = `*[
        _type == "class" && 
        !(_id in path("drafts.**"))
      ]._id`;

      const classIds: string[] = (await client.fetch(query, { group })) ?? [];
      const classReferences: Reference[] = classIds.map((classId) => ({
        _key: randomKey(12),
        _type: `class`,
        _ref: classId,
      }));

      // Individually "insert" items to append to the end of the array
      const classPatches = classReferences.map((classReference) =>
        insert([classReference], "after", [-1])
      );

      // Patch the document
      onChange([setIfMissing([]), ...classPatches]);

      // To reset the array instead you'd do this:
      // onChange(set(peopleReferences))
    },
    [onChange, client]
  );

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Grid columns={CLASS_GROUPS.length} gap={1}>
        {CLASS_GROUPS.map((c) => (
          <Button
            key={c.value}
            value={c.value}
            icon={AddIcon}
            text={c.title}
            mode="ghost"
            onClick={handleClick}
          />
        ))}
      </Grid>
    </Stack>
  );
}
