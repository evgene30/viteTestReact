import React, { useState } from 'react';
import {
  closestCorners,
  DndContext,
  useSensor,
  useSensors,
  KeyboardSensor,
  PointerSensor,
} from '@dnd-kit/core';
import {
  sortableKeyboardCoordinates,
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Task } from '@/components/draggable/Task';

export const DraggableList = () => {
  const [tasks, setTasks] = useState([
    { id: '1', value: 'One 1' },
    { id: '2', value: 'One 2' },
    { id: '3', value: 'One 3' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const getTaskPos = (id: string) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: Event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((item) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(item, originalPos, newPos);
    });
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={tasks} strategy={horizontalListSortingStrategy}>
        {tasks.map((item) => (
          <Task key={item.id} id={item.id} title={item.value} />
        ))}
      </SortableContext>
    </DndContext>
  );
};
