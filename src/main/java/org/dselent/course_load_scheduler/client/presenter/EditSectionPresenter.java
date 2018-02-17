package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.SectionsInfo;

public interface EditSectionPresenter extends BasePresenter{
	
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void editSection();
	
	List<SectionsInfo> retrieveTerm();
	List<SectionsInfo> retrieveType();
	List<SectionsInfo> retrieveTime();
	void fillSectionTerms();
	void fillSectionTypes();
	void fillSectionStart();
	void fillSectionEnd();
	String determineDays();
	void cancelEditSection();
}
