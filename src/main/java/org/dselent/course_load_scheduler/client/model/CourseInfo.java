package org.dselent.course_load_scheduler.client.model;

public class CourseInfo {
		// attributes
		private String termsName;
		private String coursesNumber;
		private String coursesTitle;
		private String sectionsName;
		private String frequency;

		// getters and setters
		public String getTermsName() {
			return termsName;
		}

		public void setTermsName(String termsName) {
			this.termsName = termsName;
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

		public String getSectionsName() {
			return sectionsName;
		}

		public void setSectionsName(String sectionsName) {
			this.sectionsName = sectionsName;
		}

		public String getFrequency() {
			return frequency;
		}

		public void setFrequency(String frequency) {
			this.frequency = frequency;
		}

		
		//Auto-generated hashCode and equals
		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((coursesNumber == null) ? 0 : coursesNumber.hashCode());
			result = prime * result + ((coursesTitle == null) ? 0 : coursesTitle.hashCode());
			result = prime * result + ((frequency == null) ? 0 : frequency.hashCode());
			result = prime * result + ((sectionsName == null) ? 0 : sectionsName.hashCode());
			result = prime * result + ((termsName == null) ? 0 : termsName.hashCode());
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
			if (sectionsName == null) {
				if (other.sectionsName != null) {
					return false;
				}
			} else if (!sectionsName.equals(other.sectionsName)) {
				return false;
			}
			if (termsName == null) {
				if (other.termsName != null) {
					return false;
				}
			} else if (!termsName.equals(other.termsName)) {
				return false;
			}
			return true;
		}

		
		//toString
		@Override
		public String toString() {
			return "CourseInfo [termsName=" + termsName + ", coursesNumber=" + coursesNumber + ", coursesTitle="
					+ coursesTitle + ", sectionsName=" + sectionsName + ", frequency=" + frequency + "]";
		}
		
		
		
		
		
		
}
