package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.CourseSections;

public class SendNewSectionAction extends Action {
	private CourseSections section;

	public SendNewSectionAction(CourseSections newSection) {
		section = newSection;
	}

	public CourseSections getSectionInfo() {
		return section;
	}

	public void setSection(CourseSections sections) {
		this.section = sections;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(section);

		return sb.toString();
	}
}
