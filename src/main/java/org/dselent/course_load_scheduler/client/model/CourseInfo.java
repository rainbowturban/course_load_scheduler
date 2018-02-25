package org.dselent.course_load_scheduler.client.model;

public class CourseInfo {
		// attributes
		private Integer coursesId;
		private String coursesNumber;
		private String coursesTitle;
		private Integer frequencyId;
		private String frequency;
		

		public Integer getCoursesId() {
			return coursesId;
		}

		public void setCoursesId(Integer coursesId) {
			this.coursesId = coursesId;
		}

		public Integer getFrequencyId() {
			return frequencyId;
		}

		public void setFrequencyId(Integer frequencyId) {
			this.frequencyId = frequencyId;
		}

		public String getCoursesNumber() {
			return coursesNumber;
		}

		public void setCoursesNumber(String coursesNumber) {
			this.coursesNumber = coursesNumber;
		}

		public String getCoursesTitle() {
			return coursesTitle;
		}

		public void setCoursesTitle(String coursesTitle) {
			this.coursesTitle = coursesTitle;
		}

		public String getFrequency() {
			return frequency;
		}

		public void setFrequency(String frequency) {
			this.frequency = frequency;
		}

		
		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((coursesId == null) ? 0 : coursesId.hashCode());
			result = prime * result + ((coursesNumber == null) ? 0 : coursesNumber.hashCode());
			result = prime * result + ((coursesTitle == null) ? 0 : coursesTitle.hashCode());
			result = prime * result + ((frequency == null) ? 0 : frequency.hashCode());
			result = prime * result + ((frequencyId == null) ? 0 : frequencyId.hashCode());
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj) {
				return true;
			}
			if (obj == null) {
				return false;
			}
			if (!(obj instanceof CourseInfo)) {
				return false;
			}
			CourseInfo other = (CourseInfo) obj;
			if (coursesId == null) {
				if (other.coursesId != null) {
					return false;
				}
			} else if (!coursesId.equals(other.coursesId)) {
				return false;
			}
			if (coursesNumber == null) {
				if (other.coursesNumber != null) {
					return false;
				}
			} else if (!coursesNumber.equals(other.coursesNumber)) {
				return false;
			}
			if (coursesTitle == null) {
				if (other.coursesTitle != null) {
					return false;
				}
			} else if (!coursesTitle.equals(other.coursesTitle)) {
				return false;
			}
			if (frequency == null) {
				if (other.frequency != null) {
					return false;
				}
			} else if (!frequency.equals(other.frequency)) {
				return false;
			}
			if (frequencyId == null) {
				if (other.frequencyId != null) {
					return false;
				}
			} else if (!frequencyId.equals(other.frequencyId)) {
				return false;
			}
			return true;
		}

		
		@Override
		public String toString() {
			return "CourseInfo [coursesId=" + coursesId + ", coursesNumber=" + coursesNumber + ", coursesTitle="
					+ coursesTitle + ", frequencyId=" + frequencyId + ", frequency=" + frequency + "]";
		}		
}
