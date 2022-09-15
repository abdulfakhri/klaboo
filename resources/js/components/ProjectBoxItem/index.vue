<template>
  <div class="project-box__container">
    <template v-if="role === 'Student'">
      <ProjectBoxItemWaiting v-if="data.status === 'Waiting'" :data="data" />
      <ProjectBoxItemAccepted v-else-if="data.status === 'Accepted'" :data="data" />
      <ProjectBoxItemRejected v-else-if="data.status === 'Rejected'" :data="data" />
      <ProjectBoxItemWaitingToStart v-else-if="data.status === 'Waiting to Start'" :data="data" />
      <ProjectBoxItemProjectStarted v-else-if="data.status === 'Project Started'" :data="data" />
      <ProjectBoxItemFinished v-else-if="data.status === 'Finished'" :data="data" />
      <ProjectBoxItemBailOut v-else-if="data.status === 'Bail Out'" :data="data" />
    </template>
    <template v-else>
      <ProjectBoxItemHiring v-if="data.status === 'Hiring'" :data="data" />
      <ProjectBoxItemOngoing v-else-if="data.status === 'Ongoing'" :data="data" />
      <ProjectBoxItemConfirmation v-else-if="data.status === 'Confirmation'" :data="data" />
      <ProjectBoxItemFinished v-else-if="data.status === 'Finished'" :data="data" />
      <ProjectBoxItemDraft v-else-if="data.status === 'Draft'" :data="data" />
    </template>
  </div>
</template>

<script>

import ProjectBoxItemWaiting from '../Student/ProjectBoxItemWaiting'
import ProjectBoxItemAccepted from '../Student/ProjectBoxItemAccepted'
import ProjectBoxItemRejected from '../Student/ProjectBoxItemRejected'
import ProjectBoxItemWaitingToStart from '../Student/ProjectBoxItemWaitingToStart'
import ProjectBoxItemProjectStarted from '../Student/ProjectBoxItemProjectStarted'
import ProjectBoxItemBailOut from '../Student/ProjectBoxItemBailOut'
import ProjectBoxItemHiring from '../Lecturer/ProjectBoxItemHiring'
import ProjectBoxItemOngoing from '../Lecturer/ProjectBoxItemOngoing'
import ProjectBoxItemConfirmation from '../Lecturer/ProjectBoxItemConfirmation'
import ProjectBoxItemFinished from '../Lecturer/ProjectBoxItemFinished'
import ProjectBoxItemDraft from '../Lecturer/ProjectBoxItemDraft'

export default {
  name: 'ProjectBoxItem',

  middleware: ['auth'],

  components: {
    ProjectBoxItemWaiting,
    ProjectBoxItemAccepted,
    ProjectBoxItemRejected,
    ProjectBoxItemWaitingToStart,
    ProjectBoxItemProjectStarted,
    ProjectBoxItemBailOut,
    ProjectBoxItemHiring,
    ProjectBoxItemOngoing,
    ProjectBoxItemConfirmation,
    ProjectBoxItemFinished,
    ProjectBoxItemDraft
  },

  props: {
    data: { type: Object, default: null },
    role: { type: String, default: null }
  }
}
</script>

<style scoped>

</style>
