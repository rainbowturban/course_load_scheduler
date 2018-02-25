package org.dselent.course_load_scheduler.client.action;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.SectionType;

public class ReceiveGetSectionTypesAction extends Action{
	private List<SectionType> typeList;

	public ReceiveGetSectionTypesAction() {
		typeList = null;
	}
	
	public ReceiveGetSectionTypesAction(List<SectionType> typeList) {
		this.typeList = typeList;
	}
	
	public List<SectionType> getSectionTypes() {
		return typeList;
	}

	public void setSectionTypes(List<SectionType> typeList) {
		this.typeList = typeList;
	}

	@Override
	public String toString()
	{
		StringBuilder sb = new StringBuilder();

		sb.append(typeList);

		return sb.toString();
	}

}
