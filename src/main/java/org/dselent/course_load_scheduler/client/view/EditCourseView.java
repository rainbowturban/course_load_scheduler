package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.EditCoursePresenter;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.gwt.user.client.ui.TextBox;

public interface EditCourseView extends BaseView<EditCoursePresenter>{

	//button getters
	public Button getSubmitButton();
	public Button getCancelButton();
	public Button getAddSectionButton();
	public Button getEditSectionButton();
	public Button getRemoveSectionButton();
	
	//setter/getter for sectionList panel
	public StackPanel getSectionList();
	public void setSectionList(StackPanel sectionList);
	
	//getters for textboxes
	public TextBox getCourseNameField();
	public TextBox getCourseNumberField();
	
	//getter/setter for dropdown
	public ListBox getFrequencyDropdown();
	public void setFrequencyDropdown(ListBox dropdown);
	
}
