package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.SectionsInfo;

public class SendNewSectionAction extends Action {
	private SectionsInfo section;

	public SectionsInfo getSectionInfo() {
		return section;
	}

	public void setSection(SectionsInfo sections) {
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
