package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.Sections;

public class SendEditSectionAction extends Action{
	private Sections section;

	public SendEditSectionAction() {
		section = null;
	}
	
	public SendEditSectionAction(Sections sections) {
		this.section = sections;
	}
	
	public Sections getSectionInfo() {
		return section;
	}

	public void setSection(Sections sections) {
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
