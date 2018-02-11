package org.dselent.course_load_scheduler.client.model;

import java.sql.Time;

public class SectionsInfo extends Model{
	// attributes
	private String termsName;
	private String sectionType;
	private String days;
	private String coursesNumber;
	private String coursesTitle;
	private Time startTime;
	private Time endTime;
	private String sectionsName;
	private String facultyFirstName;
	private String facultyLastName;

	//setters and getters
	public String getTermsName() {
		return termsName;
	}

	public void setTermsName(String termsName) {
		this.termsName = termsName;
	}

	public String getSectionType() {
		return sectionType;
	}

	public void setSectionType(String sectionType) {
		this.sectionType = sectionType;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
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

	public Time getStartTime() {
		return startTime;
	}

	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}

	public Time getEndTime() {
		return endTime;
	}

	public void setEndTime(Time endTime) {
		this.endTime = endTime;
	}

	public String getSectionsName() {
		return sectionsName;
	}

	public void setSectionsName(String sectionsName) {
		this.sectionsName = sectionsName;
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
		result = prime * result + ((days == null) ? 0 : days.hashCode());
		result = prime * result + ((endTime == null) ? 0 : endTime.hashCode());
		result = prime * result + ((facultyFirstName == null) ? 0 : facultyFirstName.hashCode());
		result = prime * result + ((facultyLastName == null) ? 0 : facultyLastName.hashCode());
		result = prime * result + ((sectionType == null) ? 0 : sectionType.hashCode());
		result = prime * result + ((sectionsName == null) ? 0 : sectionsName.hashCode());
		result = prime * result + ((startTime == null) ? 0 : startTime.hashCode());
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
		if (!(obj instanceof SectionsInfo)) {
			return false;
		}
		SectionsInfo other = (SectionsInfo) obj;
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
		if (days == null) {
			if (other.days != null) {
				return false;
			}
		} else if (!days.equals(other.days)) {
			return false;
		}
		if (endTime == null) {
			if (other.endTime != null) {
				return false;
			}
		} else if (!endTime.equals(other.endTime)) {
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
		if (sectionType == null) {
			if (other.sectionType != null) {
				return false;
			}
		} else if (!sectionType.equals(other.sectionType)) {
			return false;
		}
		if (sectionsName == null) {
			if (other.sectionsName != null) {
				return false;
			}
		} else if (!sectionsName.equals(other.sectionsName)) {
			return false;
		}
		if (startTime == null) {
			if (other.startTime != null) {
				return false;
			}
		} else if (!startTime.equals(other.startTime)) {
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
		return "SectionsInfo [termsName=" + termsName + ", sectionType=" + sectionType + ", days=" + days
				+ ", coursesNumber=" + coursesNumber + ", coursesTitle=" + coursesTitle + ", startTime=" + startTime
				+ ", endTime=" + endTime + ", sectionsName=" + sectionsName + ", facultyFirstName="
				+ facultyFirstName + ", facultyLastName=" + facultyLastName + "]";
	}

}
