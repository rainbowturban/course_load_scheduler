package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.SectionsInfo;

public interface AddSectionPresenter extends BasePresenter{
	
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void addSection();
	
	List<SectionsInfo> retrieveSections();
	void fillSection();

}
