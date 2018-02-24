package org.dselent.course_load_scheduler.client.action;

import org.dselent.course_load_scheduler.client.model.Sections;

public class ReceiveEditSectionAction extends Action{
private Sections section;
	
	public ReceiveEditSectionAction(Sections section) {
		this.section = section;
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
