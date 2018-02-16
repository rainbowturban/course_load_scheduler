package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.presenter.EditCoursePresenter;
import org.dselent.course_load_scheduler.client.view.EditCourseView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.ListBox;

public class EditCourseViewImpl extends BaseViewImpl<EditCoursePresenter> implements EditCourseView  {

	private static EditCourseViewImplUiBinder uiBinder = GWT.create(EditCourseViewImplUiBinder.class);
	@UiField HTMLPanel baseContainer;
	@UiField Button submitButton;
	@UiField StackPanel sectionList;
	@UiField Button editSection;
	@UiField Button addSection;
	@UiField Button removeSection;
	@UiField Button cancelButton;
	@UiField TextBox courseNameField;
	@UiField TextBox courseNumberField;
	@UiField ListBox frequencyDropdown;


	
	interface EditCourseViewImplUiBinder extends UiBinder<Widget, EditCourseViewImpl> {
	}

	public EditCourseViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setPresenter(EditCoursePresenter presenter) {
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return baseContainer;
	}
	
	//get buttons
	@Override
	public Button getSubmitButton() {
		return submitButton;
	}
	@Override
	public Button getCancelButton() {
		return cancelButton;
	}
	@Override
	public Button getAddSectionButton() {
		return addSection;
	}
	@Override
	public Button getEditSectionButton() {
		return editSection;
	}
	@Override
	public Button getRemoveSectionButton() {
		return removeSection;
	}
	
	//getter and setter for sectionList
	@Override
	public StackPanel getSectionList() {
		return sectionList;
	}
	@Override
	public void setSectionList(StackPanel sectionList) {
		this.sectionList = sectionList;
	}
	
	//getters for text fields
	@Override
	public TextBox getCourseNameField() {
		return courseNameField;
	}
	@Override
	public TextBox getCourseNumberField() {
		return courseNumberField;
	}
	
	//getter/setter for dropdown
	@Override
	public ListBox getFrequencyDropdown() {
		return frequencyDropdown;
	}
	@Override
	public void setFrequencyDropdown(ListBox dropdown) {
		frequencyDropdown = dropdown;
	}
	


	@UiHandler("addSection")
	void onAddSectionClick(ClickEvent event) {
		presenter.loadAddSectionPage();
	}
	@UiHandler("editSection")
	void onEditSectionClick(ClickEvent event) {
		presenter.loadEditSectionPage();
	}
	@UiHandler("removeSection")
	void onRemoveSectionClick(ClickEvent event) {
		presenter.removeSection();
	}
	
	@UiHandler("submitButton")
	void onSubmitButtonClick(ClickEvent event) {
		presenter.submitCourseEdit();
		
		presenter.returnToViewCourses();
	}
	@UiHandler("cancelButton")
	void onCancelButtonClick(ClickEvent event) {
		presenter.returnToViewCourses();
	}
}
