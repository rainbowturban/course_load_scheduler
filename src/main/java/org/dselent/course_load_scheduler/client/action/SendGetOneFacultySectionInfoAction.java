package org.dselent.course_load_scheduler.client.action;

public class SendGetOneFacultySectionInfoAction extends Action{
	private Integer facultyId;
	private Integer termsId;
	
	public SendGetOneFacultySectionInfoAction(Integer facultyId, Integer termsId) {
		this.facultyId = facultyId;
		this.termsId = termsId;
	}

	public Integer getFacultyId() {
		return facultyId;
	}

	public void setFacultyId(Integer id) {
		this.facultyId = id;
	}
	
	public Integer getTermsId() {
		return termsId;
	}
	
	public void setTermsId(Integer id) {
		this.termsId = id;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("SendGetOneFacultySectionInfoAction [facultyId=");
		builder.append(facultyId);
		builder.append(", termsId=");
		builder.append(termsId);
		builder.append("]");
		return builder.toString();
	}

}
