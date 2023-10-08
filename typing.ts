interface CollectionModel {
  id: number
  title: string
}

interface ListModel {
  id: number
  title: string
  collectionId: CollectionModel['id']
  previousListId: ListModel['id'] | null
}

interface StatusModel {
  id: number
  title: string
  listId: ListModel['id']
}

enum TaskUrgency {
  URGENT = 'URGENT'
}

interface TaskModel {
  id: number
  title: string
  description: string
  urgency: TaskUrgency
  statusId: ListModel['id']
}