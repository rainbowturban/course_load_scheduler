package org.dselent.course_load_scheduler.client.model;

public class CourseFaculty {
	// attributes
	private String coursesTitle;
	private String coursesNumber;
	private String facultyFirstName;
	private String facultyLastName;

	//setters and getters
	public String getCoursesTitle() {
		return coursesTitle;
	}

	public void setCoursesTitle(String coursesTitle) {
		this.coursesTitle = coursesTitle;
	}

	public String getCoursesNumber() {
		return coursesNumber;
	}

	public void setCoursesNumber(String coursesNumber) {
		this.coursesNumber = coursesNumber;
	}

	public String getFacultyFirstName() {
		return facultyFirstName;
	}

	public void setFacultyFirstName(String facultyFirstName) {
		this.facultyFirstName = facultyFirstName;
	}

	public String getFacultyLastName() {
		return facultyLastName;
	}

	public void setFacultyLastName(String facultyLastName) {
		this.facultyLastName = facultyLastName;
	}
	
	//hashCode and equals

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((coursesNumber == null) ? 0 : coursesNumber.hashCode());
		result = prime * result + ((coursesTitle == null) ? 0 : coursesTitle.hashCode());
		result = prime * result + ((facultyFirstName == null) ? 0 : facultyFirstName.hashCode());
		result = prime * result + ((facultyLastName == null) ? 0 : facultyLastName.hashCode());
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
		if (!(obj instanceof CourseFaculty)) {
			return false;
		}
		CourseFaculty other = (CourseFaculty) obj;
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
		if (facultyFirstName == null) {
			if (other.facultyFirstName != null) {
				return false;
			}
		} else if (!facultyFirstName.equals(other.facultyFirstName)) {
			return false;
		}
		if (facultyLastName == null) {
			if (other.facultyLastName != null) {
				return false;
			}
		} else if (!facultyLastName.equals(other.facultyLastName)) {
			return false;
		}
		return true;
	}
	
	//toString
	@Override
	public String toString() {
		return "CourseFaculty [coursesTitle=" + coursesTitle + ", coursesNumber=" + coursesNumber
				+ ", facultyFirstName=" + facultyFirstName + ", facultyLastName=" + facultyLastName + "]";
	}
	
}
